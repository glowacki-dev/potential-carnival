import { BaseClient } from '../client';

const fetch = require('node-fetch');

export class ImagesClient extends BaseClient {
  _getHeaders = sessionID => {
    return {
      'SESSION-ID': sessionID,
      'Content-Type': 'application/json'
    };
  };

  fetchImages = async sessionID => {
    let images = await fetch(this._url() + 'images/', {
      method: 'GET',
      headers: this._getHeaders(sessionID),
      mode: 'cors'
    });

    const images_data = await images.json();
    return images_data.images;
  };

  imagesSelect = async (sessionID, imageIDS) => {
    await fetch(this._url() + 'images/', {
      method: 'POST',
      headers: this._getHeaders(sessionID),
      mode: 'cors',
      body: JSON.stringify({ img_ids: imageIDS })
    });
  };
}
