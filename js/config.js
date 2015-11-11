var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Cradley Heath, GB',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '36d0bc3adf68ab750ba9713b6865d4ca'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Good afternoon!',
            'What\'s cooking?',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Welcome home'
        ]
    },
    calendar: {
        maximumEntries: 10
    },
    news: {
        feed: 'http://feeds.bbci.co.uk/news/england/birmingham_and_black_country/rss.xml'
    }
}
