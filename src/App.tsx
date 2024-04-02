/*
 * @Author: 秋意微醺时
 * @Date: 2024-04-01 20:16:24
 * @Description: 请填写说明
 */
import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
// import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 第一次进来播放歌曲的id，应该去localStorage中获取上一次播放的歌曲，这里暂时写死
    dispatch(fetchCurrentSongAction(2072639869))
  }, [])

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      {/* <AppFooter /> */}

      {/* 播放器工具栏 */}
      <AppPlayerBar />
    </div>
  )
}

export default App
