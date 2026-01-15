import { Howl } from 'howler'

export const playGuide = (url: string) => {
  const audio = new Howl({
    src: [url],
    html5: true
  })
  audio.play()
}
