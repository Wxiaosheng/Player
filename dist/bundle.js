(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.TZPlayer = factory());
}(this, (function () { 'use strict';

  var version = "1.0.0";

  console.log(version);

  class TZPlayer {
    constructor(){
      this.version = version,
      this.audio = new Audio(),
      this.playList = [];
    }

    // 播放
    play(id){
      const sound = this.playList.filter(sound => id === sound.id)[0] || {};
      console.log(sound);
      if(sound.src){ // 如果有声音
        this.audio.src = sound.src;
        this.audio.play();
      }
    }

    // 设置播放列表
    setPlayList(list){
      this.playList = list;
    }
  }


  var index = new TZPlayer();

  return index;

})));
