/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function Image() {
  // Mendapatkan data gambar
  const logoSrc: any = await fetch(new URL('./img-opengraph.jpg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )

  // Mengatur ukuran output gambar ke 500x723
  return new ImageResponse(
    (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '500px', height: '723px', background: '#fff' }}>
        <img
          src={logoSrc}
          alt="Open Graph Image"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    ),
    {
      width: 500,
      height: 723,
    }
  )
}
