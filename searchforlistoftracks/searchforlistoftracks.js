const fetch = require('node-fetch');

(async () => {
    try {
        const songs = ["Hide And Seek - Imogen Heap", "Yellow - Coldplay", "Chasing Cars - Snow Patrol", "She Will Be Loved - Maroon 5", "Here Without You - 3 Doors Down", "You And Me - Lifehouse", "How to Disappear Completely - Radiohead", "Lips of an Angel - Hinder", "Stan - Eminem", "Wonderful - Everclear", "Walking Away - Craig David", "Again I Go Unnoticed - Dashboard Confessional", "Only Time - Enya", "Miserable at Best - Mayday Parade", "Lucky - Britney Spears", "By Myself - Linkin Park", "Confessions Part II - Usher", "Beautiful - Christina Aguilera", "Breathe Me - Sia Furler", "Just Like a Pill - P!nk", "Hurt - Christina Aguilera", "Dark Blue - Jack's Mannequin", "The Funeral - Band of Horses", "Only Hope - Mandy Moore", "Hold On - Good Charlotte", "Fix You - Coldplay", "How to Save a Life - The Fray", "Fall for You - Secondhand Serenade", "Bad Day - Daniel Powter", "Collide - Howie Day", "Hurt - Johnny Cash", "Apologize - Timbaland", "Come Home - OneRepublic", "Somewhere Only We Know - Keane", "My Immortal - Evanescence", "The Scientist - Coldplay", "The Man Who Can't Be Moved - The Script", "Breakeven - The Script", "You Found Me - The Fray", "Won't Go Home Without You - Maroon 5", "Wherever You Will Go - The Calling", "Be Without You - Mary J. Blige", "Wake Me Up When September Ends - Green Day", "Unfaithful - Rihanna", "The Only Exception - Paramore", "Foolish - Ashanti", "Breathe (2 AM) - Anna Nalick", "Look After You - The Fray", "Unwell - Matchbox Twenty", "Photograph - Nickelback", "Incomplete - Backstreet Boys"]
        const authKey = 'getyourownandputithere';
        const searchTracks = (songTitle) => fetch(`https://api.spotify.com/v1/search?q=${encodeURI(songTitle)}&type=track`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }).then(r => r.json());
        const searchResults = await Promise.all(songs.map(songTitle => searchTracks(songTitle)));
        const trackUrls = searchResults.map(s => s.tracks.items[0].external_urls.spotify);
        // const trackUrls = searchResults.map(s => s.tracks.items[0].uri); // this gives uri to create playlist from
        console.log(trackUrls);
    } catch (error) {
        console.error(error);
    }
})()