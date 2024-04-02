import MYRequest from '@/service'

export function getBanners() {
  return MYRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return MYRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return MYRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return MYRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
