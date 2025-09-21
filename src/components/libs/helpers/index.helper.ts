import moment from 'moment';
import 'moment/locale/id'; // Bahasa Indonesia
import 'moment/locale/en-gb'; // Bahasa Inggris (opsional)

export class Helpers {
  /**
   * Generate a YouTube embed URL with autoplay, mute, and loop settings.
   * @param youtubeId - The ID of the YouTube video.
   * @returns The embed URL.
   */
  static youtubeEmbed(youtubeId: string): string {
    return `https://www.youtube.com/embed/${youtubeId}?Version=3&autoplay=1&mute=1&loop=1&playlist=${youtubeId}`;
  }

  /**
   * Smoothly scroll to an element by ID. This will only run on the client side.
   * @param elementId - The ID of the element to scroll to.
   */
  static scrollToElement(elementId: string) {
    if (typeof window !== "undefined") { // Ensure client-side execution
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  /**
   * Open a URL in a new browser tab. This will only run on the client side.
   * @param url - The URL to open.
   */
  static redirectToBlank(url: string) {
    if (typeof window !== "undefined") { // Ensure client-side execution
      window.open(url, '_blank');
    }
  }

  /**
   * Format a date range into a readable string.
   * @param startDate - The start date in ISO format.
   * @param endDate - The end date in ISO format (optional).
   * @param lang - type lang Indonesia or English (optional).
   * @returns A formatted date range string.
   */
  static formatDateRange(startDate: string, endDate?: string | null, lang: 'id' | 'en' = 'en'): string {
    moment.locale(lang); // Set bahasa sesuai parameter lang
  
    const startMoment = moment(startDate);
  
    if (!endDate) {
      return startMoment.format('D MMMM YYYY');
    }
  
    const endMoment = moment(endDate);
  
    if (startMoment.isSame(endMoment, 'day')) {
      return startMoment.format('D MMMM YYYY');
    } else if (startMoment.month() === endMoment.month() && startMoment.year() === endMoment.year()) {
      return `${startMoment.format('D')} - ${endMoment.format('D MMMM YYYY')}`;
    } else {
      return `${startMoment.format('D MMM')} - ${endMoment.format('D MMM YYYY')}`;
    }
  }

  /**
   * Convert a Date object into a formatted string.
   * @param date - The date to convert.
   * @returns A formatted date string.
   */
  static convert_date(date: Date): string {
    return moment(date).format('dddd, DD MMMM YYYY');
  }
}
