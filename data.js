export function revealOnScroll(arr, offset) {
  // hide items
  arr.map(elm => elm.classList.add('reveal-item'))
  
  // create waypoints
  arr.map(elm => {
    new Waypoint({
      element: elm,
      handler: () => {
        elm.classList.add('reveal-item--is-visible')
      },
      offset
    });
  });
  
}

export const timeline = [1942, 1954, 1960, 1964, 1966, 1967, 1970, 1971, 1974, 1975, 1978, 1981, 1984, 1996, 2005, 2016]

export const tlData = {
  1942: {
    title: 'Born Cassius Clay on January 17, in Louisville, Kentucky',
    content: 'Muhammad Ali (born Cassius Marcellus Clay Jr. January 17, 1942 – June 3, 2016) was an American professional boxer, activist, and philanthropist. He is nicknamed "The Greatest" and is widely regarded as one of the most significant and celebrated sports figures of the 20th century and as one of the greatest boxers of all time.',
    img: 'ali_baby.jpg'
  },
  1954: {
    title: 'Age 12. He got into boxing so young after his bicycle was stolen',
    content: 'Muhammed Ali, age 12. He got into boxing so young because he wanted to \'get the clown who stole his bike\'. The police guided him to Boxing coach Joe E. Martin. (Louisville, KY 1954). Over next six years, Clay wins six Kentucky Golden Gloves championships, two national Golden Gloves titles, and two AAU (Amateur Athletic Union) crowns.',
    img: 'ali_1954.jpg'
  },
  1960: {
    title: 'Boxing light-heavyweight podium 1960 Olympics',
    content: 'Clay wins light-heavyweight gold medal at the Summer Olympics in Rome, beating Poland\'s Zbigniew Pietrzykowski in a 5-0 decision. In October, he wins his first professional bout, against Tunney Hunsaker.',
    img: 'ali_1960.jpg'
  },
  1964: {
    title: 'Muhammad Ali vs. Sonny Liston',
    content: 'On February 25, Clay goes up against favored Sonny Liston. In what will become his trademark, Clay begins taunting Liston, calling him an "ugly old bear," promising to "float like a butterfly, sting like a bee." Clay is credited with a knockout and becomes the heavyweight champion of the world after Liston fails to come out of his corner for the seventh round. Clay coins the phrase "I am the greatest!" -- a phrase for which he will forever be known.\n On February 26, Clay joins Nation of Islam, and on March 6, he changes his name to Muhammad Ali.',
    img: 'ali_1964.jpg'
  },
  1966: {
    title: 'Ali refused to be drafted into the military',
    content: 'Citing his religious beliefs, Ali files for conscientious objector status and refuses to serve in U.S. military, which is involved in the Vietnam War at the time.',
    img: 'ali_1966.jpg'
  },
  1967: {
    title: 'Ali v. United States',
    content: 'The U.S. government denies his status. Ali is convicted of draft evasion, sentenced to a maximum five years in prison and fined $10,000. The New York boxing association takes back his titles and bans him from boxing for three years. As a result, he did not fight from March 1967 to October 1970—from ages 25 to almost 29',
    img: 'ali_1967.jpg'
  },
  1970: {
    title: 'The New York State Supreme Court orders his boxing license reinstated',
    content: 'On August 11, 1970, with his case still in appeal, Ali was granted a license to box by the City of Atlanta Athletic Commission, thanks to State Senator Leroy R. Johnson. Ali\'s first return bout was against Jerry Quarry on October 26, resulting in a win after three rounds after Quarry was cut.\nA month earlier, a victory in federal court forced the New York State Boxing Commission to reinstate Ali\'s license. He fought Oscar Bonavena at Madison Square Garden in December, an uninspired performance that ended in a dramatic technical knockout of Bonavena in the 15th round. The win left Ali as a top contender against heavyweight champion Joe Frazier.',
    img: 'ali_1970.jpg'
  },
  1971: {
    title: 'First fight against Joe Frazier, was nicknamed the "Fight of the Century"',
    content: 'In March, Ali fights heavyweight champ Joe Frazier in Madison Square Garden, but loses after 15 rounds, in a unanimous decision.\nLater that year, Supreme Court rules in his favor, reversing the 1967 draft-evasion conviction, saying he should not have been drafted in the first place due to his religious beliefs.',
    img: 'ali_1971.jpg'
  },
  1974: {
    title: 'Muhammad Ali vs. George Foreman',
    content: 'In January, Ali beats Frazier. Later that year, he beats George Foreman in the "Rumble in the Jungle," and reclaims world heavyweight champion title.',
    img: 'Ali_1974.jpg'
  },
  1975: {
    title: 'Third fight against Joe Frazier',
    content: 'Ali again faces Frazier, beats him in fight known as "The Thrilla in Manila."',
    img: 'ali_1975.jpg'
  },
  1978: {
    title: 'Muhammad Ali vs. Leon Spinks',
    content: 'In Februrary, Ali loses heavyweight title to Leon Spinks; regains it six months later by beating Spinks.',
    img: 'ali_1978.jpg'
  },
  1981: {
    title: 'The end of Ali\'s career -  56 wins, 5 losses, 37 knockouts',
    content: 'Ali loses a unanimous decision to Trevor Berbick. In December, he announces his retirement -- at age 39 -- ending his career with a professional record of 56 wins, 5 losses, 37 knockouts.',
    img: 'ali_1981.jpg'
  },
  1984: {
    title: 'He is diagnosed with Parkinson\'s disease.',
    content: '',
    img: ''
  },
  1996: {
    title: 'Ali carries the Olympic flame for Summer Games in Atlanta, Georgia.',
    content: 'The opening ceremony of the 1996 Summer Olympics took place in the evening on Friday 19 July in the Centennial Olympic Stadium, Atlanta, United States. As mandated by the Olympic Charter, the proceedings combined the formal and ceremonial opening of this international sporting event, including welcoming speeches, hoisting of the flags and the parade of athletes, with an artistic spectacle to showcase the host nation’s culture and history.\nThe Olympic cauldron was lit by former gold medalist and boxing champion Muhammad Ali.',
    img: 'ali_1996.jpg'
  },
  2005: {
    title: 'Ali is awarded the Presidential Medal of Freedom',
    content: 'President George W. Bush presenting Muhammad Ali  with the Presidential Medal of Freedom, the highest U.S. civilian honor, on November 9, 2005, during ceremonies at the White House.',
    img: 'ali_2005.jpg'
  },
  2016: {
    title: 'Dies June 3 in Phoenix, Arizona. He was married four times and had nine children.',
    content: 'Ali\'s funeral had been pre-planned by himself and others for several years prior to his actual death. The services began in Louisville on June 9, 2016, with an Islamic Janazah prayer service at Freedom Hall on the grounds of the Kentucky Exposition Center. On June 10, 2016, the funeral procession went through the streets of Louisville and ended at Cave Hill Cemetery, where Ali was interred during a private ceremony. His grave is marked with a simple granite marker that bears only his name.',
    img: 'ali_2016.jpg'
  },
}

export const quotes = [
  'I believe in the religion of Islam. I believe in Allah and peace.',
  'To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.',
  'It isn’t the mountains ahead to climb that wear you out; it’s the pebble in your shoe.',
  'Float like a butterfly, sting like a bee.',
  'It’s lack of faith that makes people afraid of meeting challenges, and I believed in myself.',
  'It’s hard to be humble, when you’re as great as I am.',
  'If you even dream of beating me you’d better wake up and apologize.',
  'A man who views the world the same at fifty as he did at twenty has wasted thirty years of his life.',
  'He who is not courageous enough to take risks will accomplish nothing in life.',
  'I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’'
];