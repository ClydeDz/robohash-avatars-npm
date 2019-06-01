# Robohash Avatars
Generate robot-based avatar images based on any text.  
    
[![Build status](https://clydedsouza.visualstudio.com/RoboHash%20Avatars%20npm/_apis/build/status/RoboHash%20Avatars%20Master)](https://clydedsouza.visualstudio.com/RoboHash%20Avatars%20npm/_build/latest?definitionId=27) 
[![Azure DevOps tests (branch)](https://img.shields.io/azure-devops/tests/clydedsouza/RoboHash%20Avatars%20npm/27/master.svg)](https://clydedsouza.visualstudio.com/RoboHash%20Avatars%20npm/_build/latest?definitionId=27) 
[![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/clydedsouza/RoboHash%20Avatars%20npm/27.svg)](https://clydedsouza.visualstudio.com/RoboHash%20Avatars%20npm/_build/latest?definitionId=27) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ClydeDz_robohash-avatars-npm&metric=alert_status)](https://sonarcloud.io/dashboard?id=ClydeDz_robohash-avatars-npm) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ClydeDz_robohash-avatars-npm&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ClydeDz_robohash-avatars-npm) 
![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational)   


## Usage  
After installing, simply import it in your file.

```javascript
const avatars = require("robohash-avatars");
```
Consume the generateAvatar() API to get an avatar URL that you can use directly as an image. Supply the settings object to this method to generate the avatar image URL accordingly. **Username is required**. For the remainder, you can supply them based on your requirement. All settings are pretty self-explanatory.

```javascript
var actual = avatars.generateAvatar({   
            username: "tonystark", 
            background: avatars.BackgroundSets.RandomBackground1,
            characters: avatars.CharacterSets.Kittens,
            height: 400,
            width: 400
        }); 
```

### Options 
`CharacterSets` supports `Robots`, `Monsters`, `DisembodiedHeads` and `Kittens`. `BackgroundSets` supports `RandomBackground1` and `RandomBackground2`

## Examples 
> Clicking on the images below opens the image in a browser window.  

[![Sample image 1](https://robohash.org/RobohashAvatarNPM?bgset=bg1&size=200x200)](https://robohash.org/RobohashAvatarNPM?bgset=bg1&size=200x200) [![Sample image 2](https://robohash.org/tonystark?bgset=bg2&set=set2&size=200x200)](https://robohash.org/tonystark?bgset=bg2&set=set2&size=200x200) 
[![Sample image 3](https://robohash.org/peterparker?bgset=bg1&set=set4&size=200x200)](https://robohash.org/peterparker?bgset=bg1&set=set4&size=200x200) 
   
## Release notes 
Release notes can be found [here](https://github.com/ClydeDz/robohash-avatars-npm/releases).   
   
## Credits  
[RoboHash.org](http://robohash.org) is developed by [Colin Davis](https://github.com/e1ven) / [RoboHash GitHub](https://github.com/e1ven/Robohash).   
This npm package is developed by [Clyde D'Souza](https://clydedsouza.net). 
   