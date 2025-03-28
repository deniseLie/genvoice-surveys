
export const compressAudioData = async (audioBuffer) => {
  try {
    // Check if compression is needed (e.g., > 5MB)
    if (audioBuffer.byteLength <= 5 * 1024 * 1024) {
      return audioBuffer; // No compression needed
    }

    console.log(`Compressing audio from ${(audioBuffer.byteLength / (1024 * 1024)).toFixed(2)}MB...`);

    // Convert Buffer to Blob for Web Audio API processing
    const audioBlob = new Blob([audioBuffer], { type: 'audio/webm' });
    const arrayBuffer = await audioBlob.arrayBuffer();
    
    // Process with Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioData = await audioContext.decodeAudioData(arrayBuffer);
    
    // Simple downsampling (adjust based on your needs)
    const offlineCtx = new OfflineAudioContext(
      audioData.numberOfChannels,
      audioData.length / 2, // Reduce samples by half
      audioData.sampleRate / 2 // Reduce sample rate by half
    );
    
    const source = offlineCtx.createBufferSource();
    source.buffer = audioData;
    source.connect(offlineCtx.destination);
    source.start();
    
    const renderedBuffer = await offlineCtx.startRendering();
    
    // Convert back to Buffer
    const compressedArrayBuffer = await renderedBuffer.arrayBuffer();
    return Buffer.from(compressedArrayBuffer);
    
  } catch (error) {
    console.error('Audio compression failed:', error);
    return audioBuffer; // Return original if compression fails
  }
};