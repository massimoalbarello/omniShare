import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import * as SWRTC from '@andyet/simplewebrtc';

const API_KEY = '6d5adcbf775fb7ec64dca118';

const ROOM_NAME = 'mez';
const ROOM_PASSWORD = 'omnia';
const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

const store = SWRTC.createStore();

ReactDOM.render(
  <Provider store={store}>
    <SWRTC.Provider configUrl={CONFIG_URL}>
      {/* Render based on the connection state */}
      <SWRTC.Connecting>
        <h1>Connecting...</h1>
      </SWRTC.Connecting>

      <SWRTC.Connected>
        <h1>Connected!</h1>
        {/* Request the user's media */}
        <SWRTC.RequestUserMedia audio video auto />

        {/* Enable playing remote audio. */}
        <SWRTC.RemoteAudioPlayer />

        {/* Connect to a room with a name and optional password */}
        <SWRTC.Room name={ROOM_NAME} password={ROOM_PASSWORD}>
          {props => {
            /* Use the rest of the SWRTC React Components to render your UI */
          }}
        </SWRTC.Room>
      </SWRTC.Connected>
    </SWRTC.Provider>
  </Provider>,
  document.getElementById('app')
);
