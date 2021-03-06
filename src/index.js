var gl = {
    createContext:          require('./createContext'),
    setVertexAttribArrays:  require('./setVertexAttribArrays'),
    GLBuffer:               require('./GLBuffer'),
    GLFramebuffer:          require('./GLFramebuffer'),
    GLShader:               require('./GLShader'),
    GLTexture:              require('./GLTexture'),
    VertexArrayObject:      require('./VertexArrayObject'),
    shader:                 require('./shader')
};

// Export for Node-compatible environments
if (typeof module !== 'undefined' && module.exports)
{
    // Export the module
    module.exports = gl;
}

// Add to the browser window vf.glCore
if (typeof window !== 'undefined')
{
    // add the window object
    window.vf = window.vf || {};
    window.vf.glCore = gl;
}
