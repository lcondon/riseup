const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/riseUp");


// To add more
// {
//   title: '',
//   date: '',
// day: 3,
// month: month-1,
//   text:
//    '',
//   url:
//     '',
//   comments: { type: Array }
// },



const historicalSeed = [
  {
    title: "Emancipation Proclamation goes into effect",
    date: "01/01/1863",
    text:
      "During the American Civil War, President Abraham Lincoln issues the Emancipation Proclamation, calling on the Union army to liberate all slaves in states still in rebellion as “an act of justice, warranted by the Constitution, upon military necessity.” These three million slaves were declared to be “then, thenceforward, and forever free.” The proclamation exempted the border slave states that remained in the Union at the start of the Civil War and all or parts of three Confederate states controlled by the Union army.",
    url:
      "https://www.history.com/this-day-in-history/emancipation-proclamation-goes-into-effect",
    comments: { type: Array }
  },
  {
    title: "Supreme Court legalizes abortion",
    date: "01/22/1973",
    text:
      "In a historic decision, the U.S. Supreme Court rules in Roe v. Wade that women, as part of their constitutional right to privacy, can terminate a pregnancy during its first two trimesters. Only during the last trimester, when the fetus can survive outside the womb, would states be permitted to regulate abortion of a healthy pregnancy.",
    url:
      "https://www.history.com/this-day-in-history/supreme-court-legalizes-abortion",
    comments: { type: Array }
  },
  {
    title: "The Civil War begins",
    date: "4/12/1861",
    text:
      "The bloodiest four years in American history begin when Confederate shore batteries under General P.G.T. Beauregard open fire on Union-held Fort Sumter in South Carolina’s Charleston Bay. During the next 34 hours, 50 Confederate guns and mortars launched more than 4,000 rounds at the poorly supplied fort. On April 13, U.S. Major Robert Anderson surrendered the fort. Two days later, U.S. President Abraham Lincoln issued a proclamation calling for 75,000 volunteer soldiers to quell the Southern “insurrection.”",
    url: "https://www.history.com/this-day-in-history/the-civil-war-begins",
    comments: { type: Array }
  },
  {
    title: "Lincoln is shot",
    date: "4/14/1865",
    text:
      "On this day in 1865, John Wilkes Booth, an actor and Confederate sympathizer, fatally shoots President Abraham Lincoln at a play at Ford’s Theater in Washington, D.C. The attack came only five days after Confederate General Robert E. Lee surrendered his massive army at Appomattox Court House, Virginia, effectively ending the American Civil War.",
    url: "https://www.history.com/this-day-in-history/lincoln-is-shot",
    comments: { type: Array }
  },
  {
    title: "Osama bin Laden killed by U.S. forces",
    date: "05/02/2011",
    text:
      "On this day in 2011, Osama bin Laden, the mastermind behind the September 11, 2001, terrorist attacks in the United States, is killed by U.S. forces during a raid on his compound hideout in Pakistan. The notorious, 54-year-old leader of Al Qaeda, the terrorist network of Islamic extremists, had been the target of a nearly decade-long international manhunt.",
    url:
      "https://www.history.com/this-day-in-history/osama-bin-laden-killed-by-u-s-forces",
    comments: { type: Array }
  },
  {
    title: "V-E Day is celebrated in America and Britain",
    date: "05/08/1945",
    text:
      "On this day in 1945, both Great Britain and the United States celebrate Victory in Europe Day. Cities in both nations, as well as formerly occupied cities in Western Europe, put out flags and banners, rejoicing in the defeat of the Nazi war machine.",
    url:
      "https://www.history.com/this-day-in-history/v-e-day-is-celebrated-in-america-and-britain",
    comments: { type: Array }
  },
  {
    title: "Brown v. Board of Ed is decided",
    date: "05/17/1954",
    text:
      "In a major civil rights victory, the U.S. Supreme Court hands down an unanimous decision in Brown v. Board of Education of Topeka, ruling that racial segregation in public educational facilities is unconstitutional. The historic decision, which brought an end to federal tolerance of racial segregation, specifically dealt with Linda Brown, a young African American girl who had been denied admission to her local elementary school in Topeka, Kansas, because of the color of her skin.",
    url:
      "https://www.history.com/this-day-in-history/brown-v-board-of-ed-is-decided",
    comments: { type: Array }
  },
  {
    title: "D-Day",
    date: "06/06/1944",
    text:
      "Although the term D-Day is used routinely as military lingo for the day an operation or event will take place, for many it is also synonymous with June 6, 1944, the day the Allied powers crossed the English Channel and landed on the beaches of Normandy, France, beginning the liberation of Western Europe from Nazi control during World War II. Within three months, the northern part of France would be freed and the invasion force would be preparing to enter Germany, where they would meet up with Soviet forces moving in from the east.",
    url: "https://www.history.com/this-day-in-history/d-day",
    comments: { type: Array }
  },
  {
    title: "July 4, 1776: America Declares Independence from Great Britain",
    date: "07/04/1776",
    text:
      "In Philadelphia, Pennsylvania, the Continental Congress adopts the Declaration of Independence, which proclaims the independence of the United States of America from Great Britain and its king.",
    url:
      "https://www.history.com/this-day-in-history/u-s-declares-independence",
    comments: { type: Array }
  },
  {
    title: "Armstrong walks on moon",
    date: "07/20/1969",
    text:
      "At 10:56 p.m. EDT, American astronaut Neil Armstrong, 240,000 miles from Earth, speaks these words to more than a billion people listening at home: “That’s one small step for man, one giant leap for mankind.” Stepping off the lunar landing module Eagle, Armstrong became the first human to walk on the surface of the moon.",
    url: "https://www.history.com/this-day-in-history/armstrong-walks-on-moon",
    comments: { type: Array }
  },
  {
    title: "American bomber drops atomic bomb on Hiroshima",
    date: "8/6/1945",
    text:
      "On this day in 1945, at 8:16 a.m. Japanese time, an American B-29 bomber, the Enola Gay, drops the world’s first atom bomb, over the city of Hiroshima. Approximately 80,000 people are killed as a direct result of the blast, and another 35,000 are injured. At least another 60,000 would be dead by the end of the year from the effects of the fallout.",
    url:
      "https://www.history.com/this-day-in-history/american-bomber-drops-atomic-bomb-on-hiroshima",
    comments: { type: Array }
  },
  {
    title: "King speaks to March on Washington",
    date: "8/28/1963",
    text:
      "On the steps of the Lincoln Memorial in Washington, D.C., the African American civil rights movement reaches its high-water mark when Martin Luther King, Jr., speaks to about 250,000 people attending the March on Washington for Jobs and Freedom. The demonstrators–black and white, poor and rich–came together in the nation’s capital to demand voting rights and equal opportunity for African Americans and to appeal for an end to racial segregation and discrimination.",
    url:
      "https://www.history.com/this-day-in-history/king-speaks-to-march-on-washington",
    comments: { type: Array }
  },
  {
    title: "Attack on America",
    date: "9/11/2001",
    text:
      "At 8:45 a.m. on a clear Tuesday morning, an American Airlines Boeing 767 loaded with 20,000 gallons of jet fuel crashes into the north tower of the World Trade Center in New York City. The impact left a gaping, burning hole near the 80th floor of the 110-story skyscraper, instantly killing hundreds of people and trapping hundreds more in higher floors. As the evacuation of the tower and its twin got underway, television cameras broadcasted live images of what initially appeared to be a freak accident. Then, 18 minutes after the first plane hit, a second Boeing 767–United Airlines Flight 175–appeared out of the sky, turned sharply toward the World Trade Center, and sliced into the south tower at about the 60th floor. The collision caused a massive explosion that showered burning debris over surrounding buildings and the streets below. America was under attack.",
    url: "https://www.history.com/this-day-in-history/attack-on-america",
    comments: { type: Array }
  },
  {
    title: "U.S. takes possession of Alaska",
    date: "10/18/1867",
    text:
      "On this day in 1867, the U.S. formally takes possession of Alaska after purchasing the territory from Russia for $7.2 million, or less than two cents an acre. The Alaska purchase comprised 586,412 square miles, about twice the size of Texas, and was championed by William Henry Seward, the enthusiasticly expansionist secretary of state under President Andrew Johnson.",
    url:
      "https://www.history.com/this-day-in-history/u-s-takes-possession-of-alaska",
    comments: { type: Array }
  },
  {
    title: "Victory at Yorktown",
    date: "10/19/1781",
    text:
      "Hopelessly trapped at Yorktown, Virginia, British General Lord Cornwallis surrenders 8,000 British soldiers and seamen to a larger Franco-American force, effectively bringing an end to the American Revolution.",
    url: "https://www.history.com/this-day-in-history/victory-at-yorktown",
    comments: { type: Array }
  },
  {
    title: "Congress investigates Reds in Hollywood",
    date: "10/20/1947",
    text:
      "On October 20, 1947, the notorious Red Scare kicks into high gear in Washington, as a Congressional committee begins investigating Communist influence in one of the world’s richest and most glamorous communities: Hollywood.",
    url:
      "https://www.history.com/this-day-in-history/congress-investigates-reds-in-hollywood",
    comments: { type: Array }
  },
  {
    title: "100,000 people march on the Pentagon",
    date: "10/21/1967",
    text:
      "Demonstrators including radicals, liberals, black nationalists, hippies, professors, women’s groups, and war veterans march on the Pentagon.",
    url:
      "https://www.history.com/this-day-in-history/100000-people-march-on-the-pentagon",
    comments: { type: Array }
  },
  {
    title: "Cuban Missile Crisis",
    date: "10/22/1962",
    text:
      "In a televised speech of extraordinary gravity, President John F. Kennedy announces that U.S. spy planes have discovered Soviet missile bases in Cuba. These missile sites—under construction but nearing completion—housed medium-range missiles capable of striking a number of major cities in the United States, including Washington, D.C. Kennedy announced that he was ordering a naval “quarantine” of Cuba to prevent Soviet ships from transporting any more offensive weapons to the island and explained that the United States would not tolerate the existence of the missile sites currently in place. The president made it clear that America would not stop short of military action to end what he called a “clandestine, reckless, and provocative threat to world peace.”",
    url: "https://www.history.com/this-day-in-history/cuban-missile-crisis",
    comments: { type: Array }
  },
  {
    title: "An abortion-performing doctor is murdered",
    date: "10/23/1998",
    text:
      "Doctor Barnett Slepian is shot to death inside his home in Amherst, New York, by an anti-abortion radical, marking the fifth straight year that a doctor who was willing to perform abortions in upstate New York and Canada had been the victim of a sniper attack. Slepian and his family had just returned from religious services at their synagogue when a bullet shattered the kitchen window and struck him in the back. Each of the five attacks, the first four of which did not result in fatal wounds, occurred in late October or early November. It is believed that the dates were intentionally picked to center around Canada’s Remembrance Day (November 11).",
    url:
      "https://www.history.com/this-day-in-history/an-abortion-performing-doctor-is-murdered",
    comments: { type: Array }
  },
  {
    title: "U.N. formally established",
    date: "10/24/1945",
    text:
      "Less than two months after the end of World War II, the United Nations is formally established with the ratification of the United Nations Charter by the five permanent members of the Security Council and a majority of other signatories.",
    url: "https://www.history.com/this-day-in-history/u-n-formally-established",
    comments: { type: Array }
  },
  {
    title: "Cabinet member guilty in Teapot Dome scandal",
    date: "10/25/1929",
    text:
      "During the Teapot Dome scandal, Albert B. Fall, who served as secretary of the interior in President Warren G. Harding’s cabinet, is found guilty of accepting a bribe while in office. Fall was the first individual to be convicted of a crime committed while a presidential cabinet member.",
    url:
      "https://www.history.com/this-day-in-history/cabinet-member-guilty-in-teapot-dome-scandal",
    comments: { type: Array }
  },

  {
    title: 'George W. Bush signs the Patriot Act',
    date: '10/26/2001',
    text:
     'On this day in 2001, President George W. Bush signs the Patriot Act, an anti-terrorism law drawn up in response to the attacks on the Pentagon and World Trade Center on September 11, 2001.',
    url:
      'https://www.history.com/this-day-in-history/george-w-bush-signs-the-patriot-act',
    comments: { type: Array }
  },
  {
    title: 'The United States and Soviet Union step back from brink of nuclear war',
    date: '10/27/1962',
    text:
     'Complicated and tension-filled negotiations between the United States and the Soviet Union finally result in a plan to end the two-week-old Cuban Missile Crisis. A frightening period in which nuclear holocaust seemed imminent began to come to an end.',
    url:
      'https://www.history.com/this-day-in-history/the-united-states-and-soviet-union-step-back-from-brink-of-nuclear-war',
    comments: { type: Array }
  },
  {
    title: 'President Bill Clinton signs the Digital Millennium Copyright Act into law',
    date: '10/28/1998',
    text:
     'According to an ABC news report, it was none other than the pop icon Prince himself who happened upon a 29-second home video of a toddler cavorting to a barely audible background soundtrack of his 1984 hit “Let’s Go Crazy” and subsequently instigated a high-profile legal showdown involving YouTube, the Universal Music Group and a Pennsylvania housewife named Stephanie Lenz. Like the lawsuits that eventually shut down Napster, the case involved a piece of federal legislation that has helped establish a legal minefield surrounding the use of digital music in the age of the Internet. That legislation, called the Digital Millennium Copyright Act (DMCA), was signed into law by President Bill Clinton on this day in 1998.',
    url:
      'https://www.history.com/this-day-in-history/president-bill-clinton-signs-the-digital-millennium-copyright-act-into-law',
    comments: { type: Array }
  },
  {
    title: "Barack Obama elected as America’s first black president",
    date: "11/04/2008",
    text:
      "On this day in 2008, Senator Barack Obama of Illinois defeats Senator John McCain of Arizona to become the 44th U.S. president, and the first African American elected to the White House. The 47-year-old Democrat garnered 365 electoral votes and nearly 53 percent of the popular vote, while his 72-year-old Republican challenger captured 173 electoral votes and more than 45 percent of the popular vote. Obama’s vice-presidential running mate was Senator Joe Biden of Delaware, while McCain’s running mate was Governor Sarah Palin of Alaska, the first female Republican ever nominated for the vice presidency.",
    url:
      "https://www.history.com/this-day-in-history/barack-obama-elected-as-americas-first-black-president",
    comments: { type: Array }
  },
  {
    title: "East Germany opens the Berlin Wall",
    date: "11/09/1989",
    text:
      "East German officials today opened the Berlin Wall, allowing travel from East to West Berlin. The following day, celebrating Germans began to tear the wall down. One of the ugliest and most infamous symbols of the Cold War was soon reduced to rubble that was quickly snatched up by souvenir hunters. The East German action followed a decision by Hungarian officials a few weeks earlier to open the border between Hungary and Austria. This effectively ended the purpose of the Berlin Wall, since East German citizens could now circumvent it by going through Hungary, into Austria, and thence into West Germany. The decision to open the wall was also a reflection of the immense political changes taking place in East Germany, where the old communist leadership was rapidly losing power and the populace was demanding free elections and movement toward a free market system.The action also had an impact on President George Bush and his advisors. After watching television coverage of the delirious German crowds demolishing the wall, many in the Bush administration became more convinced than ever that Soviet leader Mikhail Gorbachev’s statements about desiring a new relationship with the West must be taken more seriously. Unlike 1956 and 1968, when Soviet forces ruthlessly crushed protests in Hungary and Czechoslovakia, respectively, Gorbachev actually encouraged the East German action. As such, the destruction of the Berlin Wall was one of the most significant actions leading to the end of the Cold War.",
    url:
      "https://www.history.com/this-day-in-history/east-germany-opens-the-berlin-wall",
    comments: { type: Array }
  },
  {
    title: "John F. Kennedy assassinated",
    date: "11/22/1963",
    text:
      "John Fitzgerald Kennedy, the 35th president of the United States, is assassinated while traveling through Dallas, Texas, in an open-top convertible.",
    url:
      "https://www.history.com/this-day-in-history/john-f-kennedy-assassinated",
    comments: { type: Array }
  },
  {
    title: "Pearl Harbor bombed",
    date: "12/07/1941",
    text:
      "At 7:55 a.m. Hawaii time, a Japanese dive bomber bearing the red symbol of the Rising Sun of Japan on its wings appears out of the clouds above the island of Oahu. A swarm of 360 Japanese warplanes followed, descending on the U.S. naval base at Pearl Harbor in a ferocious assault. The surprise attack struck a critical blow against the U.S. Pacific fleet and drew the United States irrevocably into World War II.",
    url: "https://www.history.com/this-day-in-history/pearl-harbor-bombed",
    comments: { type: Array }
  }
];

db.Historical.remove({})
  .then(() => db.Historical.collection.insertMany(historicalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
