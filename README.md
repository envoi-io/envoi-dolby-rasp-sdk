# Envoi - Dolby RASP SDK

This project is a Javascript SDK for Resource Agnostic Swarm Processing API "RASP" developed by [Dolby Laboratories](https://docs.dolby.io/)
It provides methods and examples for interacting with the Dolby RASP API.

Envoi is a cloud platform that automates creating, managing, and distributing 24x7, live free ad-supported streaming television "FAST", Subscription or Pay-Per-View OTT (internet delivered) channels. 

This SDK provides integration between Envoi's file-based video transcoding service and the Dolby RASP API.

Content processed by Envoi is encoded using the Dolby Profile 20 to generates multi-bitrate MultiView HEVC (MV-HEVC) MP4 and HLS renditions.

Envoi supports all Dolby RASP API methods POST, PUT, GET, and DELETE. The API uses HTTPS authentication for permitting API access.

A typical API session to submit and track a transcoding job would look like this:
	
 	Step 1 - Create RASP Asset
      POST: https://[RASP-API-ENDPOINT]/api/asset
      {"name":"[UNIQUE-CONTENT-ID]","urls":[{"url":"[CONTENT-URL]","dolby_vision_metadata_xml":"[METADATA-URL]"}],"asset_mime":"video/quicktime"}

	Step 2 - Get RASP Asset Metadata
       GET: https://[RASP-API-ENDPOINT]/asset/[RUID]/.metadata/mediaindex-file0.json

	Step 3 - Create RASP Asset Renditions
       PUT: https://[RASP-API-ENDPOINT]/api/asset/vurl?ruid=[RUID]
        [{"vurl":"/sd/hls.m3u8","config":{},"config_mime":"application/json","mime":"[MIME-TYPE]"}]

	Step 4 - Get RASP Asset Renditions URLs
        GET: https://[RASP-API-ENDPOINT]/asset/[RUID]
