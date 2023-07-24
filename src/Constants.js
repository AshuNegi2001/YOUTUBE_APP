export const LIVE_CHAT_COUNT = 30;

// export const GOOGLE_API_KEY = "AIzaSyBVACv_sra1lnmO2Z8eLaYqjUV1-F-LZGQ"; // ashunegi686@gmail.com
export const GOOGLE_API_KEY = "AIzaSyBajfoUi6-BonNCiJcVdo17DU3OCK4dDBU"; // 2000ashunegi@gmail.com
// export const GOOGLE_API_KEY = "AIzaSyAS7sRqp_nrz2tqxk6Z94L846TmIXNUV1E"; // neemanegi900@gmail.com
// export const GOOGLE_API_KEY = "AIzaSyDyUFw0xjJNtsYpcFOrZIATsAN3G9YetHw"; // 686negi@gmail.com
// export const GOOGLE_API_KEY = "AIzaSyC1pw2B4zdFm-VFKctlBIqPlWvCIX42aLQ"; // 686ashu@gmail.com
// export const GOOGLE_API_KEY = "AIzaSyCoja6KfNSmBaInK8t5h6ppY5exst5ubwI"; // 527ashunegi@gmail.com

export const YOUTUBE_VIDEOS_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

// export const YOUTUBE_SEARCH_DATA_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=" + GOOGLE_API_KEY;

export const shimmer_card_unit = 20;

// export const comment_list_api = "https://www.googleapis.com/youtube/v3/commentThreads?key=PUT-YOUR-KEYXXXXXXX&textFormat=plainText&part=snippet&videoId=PUT-YOUR-VIDEO-ID";

// export const comment_list_api2 = "https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100&pageToken={nextPageToken}"

//channelId details api:
// export const CHANNEL_DETAILS_API = "https://www.googleapis.com/youtube/v3/channels?key=" + GOOGLE_API_KEY + "&part=statistics&part=snippet&id=" + channelId;

// Individual video details api  through videoId:
// export const VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=[videoId]&key=[YOUR_API_KEY]"

// RelatedVideoList API THROUGH keywords:
// export const RELATED_VIDEOLIST_API = " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]"