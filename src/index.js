import { version } from '../package.json'

console.log(version)

class TZPlayer {
  constructor(){
    this.version = version,
    this.audio = new Audio(),
    this.playList = []
  }

  // 播放
  play(id){
    const sound = this.playList.filter(sound => id === sound.id)[0] || {}
    console.log(sound)
    if(sound.src){ // 如果有声音
      this.audio.src = sound.src
      this.audio.play()
    }
  }

  // 设置播放列表
  setPlayList(list){
    this.playList = list
  }
}

export default new TZPlayer()