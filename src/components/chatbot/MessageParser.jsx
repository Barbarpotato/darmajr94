import React from 'react';

const MessageParser = ({ children, actions }) => {

    const parse = (message) => {
        if (sessionStorage.getItem("isPlaying") === "true") {
            actions.handleDictionaryApi(message)
        } else {
            actions.handleHello()
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;