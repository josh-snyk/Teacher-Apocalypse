// JavaScript source code
module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin', 'linux'],
            config: {
                // Config here
            }
        },
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: '14sprouj',
                    name: 'Teacher-Apocalypse'
                },
                prerelease: true
            }
        }
    ]
}