        //----- Variables -----//
        let btn = document.querySelector('#new-quote');
        let quote = document.querySelector('.quote');
        let person = document.querySelector('.person');

        //----- Quotes -----//

        const quotes = [{
            quote: `"The best way to find yourself is to lose yourself in the service of others."`,
            person: `Mahatma Gandhi`
        },    {
        quote: `"The best way to find yourself is to lose yourself in the service of others."`,
        person: `Mahatma Gandhi`
        },
        {
            quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
            person: `Albert Einstein`
        },
        {
            quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
            person: `Winston Churchill`
        },
        {
            quote: `"The only way to do great work is to love what you do."`,
            person: `Steve Jobs`
        },
        {
            quote: `"In the end, we will remember not the words of our enemies, but the silence of our friends."`,
            person: `Martin Luther King Jr.`
        },
        {
            quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
            person: `Ralph Waldo Emerson`
        },
        {
            quote: `"Believe you can and you're halfway there."`,
            person: `Theodore Roosevelt`
        },
        {
            quote: `"It is during our darkest moments that we must focus to see the light."`,
            person: `Aristotle`
        },
        {
            quote: `"Life is what happens when you're busy making other plans."`,
            person: `John Lennon`
        },
        {
            quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
            person: `Nelson Mandela`
        },
        {
            quote: `"The future belongs to those who believe in the beauty of their dreams."`,
            person: `Eleanor Roosevelt`
        },
        {
            quote: `"Act as if what you do makes a difference. It does."`,
            person: `William James`
        },
        {
            quote: `"What you get by achieving your goals is not as important as what you become by achieving your goals."`,
            person: `Zig Ziglar`
        },
        {
            quote: `"Happiness is not something ready-made. It comes from your own actions."`,
            person: `Dalai Lama`
        },
        {
            quote: `"The only limit to our realization of tomorrow is our doubts of today."`,
            person: `Franklin D. Roosevelt`
        },
        {
            quote: `"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."`,
            person: `Buddha`
        },
        {
            quote: `"You miss 100% of the shots you don't take."`,
            person: `Wayne Gretzky`
        },
        {
            quote: `"Everything you've ever wanted is on the other side of fear."`,
            person: `George Addair`
        },
        {
            quote: `"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well."`,
            person: `Ralph Waldo Emerson`
        },
        {
            quote: `"I have learned over the years that when one's mind is made up, this diminishes fear."`,
            person: `Maya Angelou`
        }
        ];

        btn.addEventListener('click',function(){
            
            // random for pick quotes * the length of the
            let random = Math.floor(Math.random() * quotes.length);

            // display the quote and person
            quote.innerText = quotes[random].quote;
            person.innerText = quotes[random].person;
        });
