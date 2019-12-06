const sounds = [
  {
    id: '10001',
    name: '相亲1',
    src: 'http://aod.tx.xmcdn.com/group9/M00/3F/3A/wKgDZlcHu0DiWWfvAI8UGyN0BfU382.m4a'
  },
  {
    id: '10002',
    name: '相亲2',
    src: 'http://aod.tx.xmcdn.com/group15/M00/3D/84/wKgDZVcHuwWSyT_9AK1_wywYigg738.m4a'
  },
  {
    id: '10003',
    name: '相亲3',
    src: 'http://audio.xmcdn.com/group20/M02/2E/FB/wKgJJ1fmieuxv30gAJQkFntTos8776.m4a'
  },
  {
    id: '10004',
    name: '纯爷们',
    // src: './assets/media/chunyemen.m4a'
    src: 'http://audio.xmcdn.com/group18/M01/2D/81/wKgJKlfmigqxDgm1AB-W9lEcJjs328.m4a'
  }
]


window.onload  = () => {
  TZPlayer.setPlayList(sounds)
}
// const play = document.getElementById('play')

// play.addEventListener('click', () => {
//   console.log('clicl play')

  

//   TZPlayer.play('10001')
//   // TZPlayer.play('10005')
// }, false)