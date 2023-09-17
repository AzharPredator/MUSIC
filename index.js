var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/stay.png",
        audioSrc:"./audio/Stay_320(PagalWorld).mp3",
        title:"Stay"
    },

    {
        id:2,
        imageSrc:"./thumbnails/unstoppable.png",
        audioSrc:"./audio/Unstoppable(PagalWorld).mp3",
        title:"Unstoppable"
    },

    {
        id:3,
        imageSrc:"./thumbnails/let me love you.png",
        audioSrc:"./audio/Let-Me-Love-You_320(PagalWorld).mp3",
        title:"Let Me Love You"
    },

    {
        id:4,
        imageSrc:"./thumbnails/Industry-Baby.png",
        audioSrc:"./audio/Industry-Baby-MostMags.mp3",
        title:"Industry Baby"
    },

    {
        id:5,
        imageSrc:"./thumbnails/senorita.png",
        audioSrc:"./audio/Senorita_320(PagalWorld.com.se).mp3",
        title:"Senorita"
    },

    {
        id:6,
        imageSrc:"./thumbnails/no lie.png",
        audioSrc:"./audio/No-Lie_320(PagalWorld).mp3",
        title:"No Lie"
    },

    {
        id:7,
        imageSrc:"./thumbnails/closer.png",
        audioSrc:"./audio/Closer - The Chainsmokers ft. Halsey 320(PagalWorld).mp3",
        title:"Closer"
    },

    {
        id:8,
        imageSrc:"./thumbnails/on my way.png",
        audioSrc:"./audio/On-My-Way.mp3",
        title:"On My Way"
    },

    {
        id:9,
        imageSrc:"./thumbnails/harleys in hawaii.png",
        audioSrc:"./audio/Harleys-In-Hawaii_320(PagalWorld).mp3",
        title:"Harleys In Hawaii"
    },

    {
        id:10,
        imageSrc:"./thumbnails/believer.png",
        audioSrc:"./audio/Believer_320(PagalWorld).mp3",
        title:"Believer"
    },

    {
        id:11,
        imageSrc:"./thumbnails/peaches.png",
        audioSrc:"./audio/Peaches_320(PagalWorld).mp3",
        title:"Peaches"
    },

    {
        id:12,
        imageSrc:"./thumbnails/cheap thrills.png",
        audioSrc:"./audio/Cheap-Thrills(musicdownload.cc).mp3",
        title:"Cheap Thrills"
    },

    {
        id:13,
        imageSrc:"./thumbnails/safari.png",
        audioSrc:"./audio/Safari_320(PagalWorld).mp3",
        title:"Safari"
    },

    {
        id:14,
        imageSrc:"./thumbnails/sugar _ brownies.png",
        audioSrc:"./audio/Sugar _ Brownies-Dharia-VlcMusic.CoM.mp3",
        title:"Sugar & Brownies"
    },

    {
        id:15,
        imageSrc:"./thumbnails/jalebi baby.png",
        audioSrc:"./audio/Jalebi Baby - Tesher.mp3",
        title:"Jalebi Baby"
    },

    {
        id:16,
        imageSrc:"./thumbnails/faded.png",
        audioSrc:"./audio/Faded Alan Walker_320-(Webmusicweb.In).mp3",
        title:"Faded Alan Walker"
    }


]

function playAudio (songid){
    var song=songs.find(function(song,index)
    {
        return song.id===songid
    });
    
    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText=song.title;
    document.getElementById("audio_player").play();
}