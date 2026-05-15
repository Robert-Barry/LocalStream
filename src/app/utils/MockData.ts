import { Video } from '../store/useAppStore'; // Adjust path if needed

export const MOCK_VIDEOS: Video[] = [
    {
        id: '1',
        title: 'Morning News Update',
        thumbnailURL: 'https://picsum.photos/id/1015/320/180',
        videoStreamURL: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        category: 'news',
    },
    {
        id: '2',
        title: 'Local Weather Forecast',
        thumbnailURL: 'https://picsum.photos/id/1016/320/180',
        videoStreamURL: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        category: 'news',
    },
    {
        id: '3',
        title: 'High School Football Highlights',
        thumbnailURL: 'https://picsum.photos/id/1058/320/180',
        videoStreamURL: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        category: 'live',
    },
    {
        id: '4',
        title: 'Downtown Food Festival',
        thumbnailURL: 'https://picsum.photos/id/1060/320/180',
        videoStreamURL: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        category: 'home',
    },
    {
        id: '5',
        title: 'City Council Meeting',
        thumbnailURL: 'https://picsum.photos/id/1073/320/180',
        videoStreamURL: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        category: 'news',
    },
];