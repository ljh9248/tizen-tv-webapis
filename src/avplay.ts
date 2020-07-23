const { avplay } = window.webapis;

const {
    open,
    close,
    prepare,
    prepareAsync,
    setDisplayRect,
    play,
    seekTo,
    stop,
    getState,
    pause,
    jumpForward,
    jumpBackward,
    getDuration,
    getCurrentTime,
    setTimeoutForBuffering,
    setBufferingParam,
    setSpeed,
    setListener,
    setDrm,
    getUID,
    setSoundAnalysisListener,
    unsetSoundAnalysisListener,
    setSilentSubtitle,
    setExternalSubtitlePath,
    setSubtitlePosition,
    setDisplayMethod,
    setSelectTrack,
    getCurrentStreamInfo,
    getTotalTrackInfo,
    setStreamingProperty,
    getStreamingProperty,
    getVersion,
    suspend,
    restore,
    restoreAsync
} = avplay;

module.exports = {
    open,
    close,
    prepare,
    prepareAsync,
    setDisplayRect,
    play,
    seekTo,
    stop,
    getState,
    pause,
    jumpForward,
    jumpBackward,
    getDuration,
    getCurrentTime,
    setTimeoutForBuffering,
    setBufferingParam,
    setSpeed,
    setListener,
    setDrm,
    getUID,
    setSoundAnalysisListener,
    unsetSoundAnalysisListener,
    setSilentSubtitle,
    setExternalSubtitlePath,
    setSubtitlePosition,
    setDisplayMethod,
    setSelectTrack,
    getCurrentStreamInfo,
    getTotalTrackInfo,
    setStreamingProperty,
    getStreamingProperty,
    getVersion,
    suspend,
    restore,
    restoreAsync
};