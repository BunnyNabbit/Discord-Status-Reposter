class Network {
    /**
     * Logs onto the network.
     * @returns {Promise} Resolves when complete.
     */
    logon() {
        
    }

    /**
     * Posts to the network as a new post.
     * @param {string} thisStatus Text to send.
     * @returns {Promise} Resolves when complete.
     */
    post(thisStatus) {

    }

    /**
     * Replies to the last post with the specified text, with the specified text. 
     * @param {string} newText Text to send.
     * @param {string} oldText Text of the post to reply to.
     * @returns {Promise} Resolves when complete.
     */
    replyTo(oldText, newText) {

    }

    /**
     * Returns a boolean indicating whether the specific network is enabled or not.
     * @returns {boolean}
     */
    isEnabled() {
        return true;
    }

    /**
     * Sets the profile picture with the specified URL.
     * @param {string} url The URL of the avatar,
     */
    async setAvatar(url) {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}.`);
            }
            return response.blob();
        })
    }
}

module.exports = Network