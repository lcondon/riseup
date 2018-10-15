const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/riseUp');

const articleSeed = [
  {
    title: 'At Immigration Argument, Justice Kavanaugh Takes Hard Line',
    author: 'Adam Liptak',
    date: '10/11/2018',
    text: `A Supreme Court argument on immigration detention appeared to reveal a gap between President Trump's two appointees.`,
    url:
      'https://www.nytimes.com/2018/10/10/us/politics/kavanaugh-immigration-supreme-court-case.html',
    image:
      'https://static01.nyt.com/images/2018/10/11/us/politics/11dc-scotus-print/merlin_136749096_7cc15d56-72fe-4eaa-b0e4-87cda50f9ed6-articleLarge.jpg',
    comments: []
  },
  {
    title: "Complaints of Voter Suppression Loom Over Georgia Governor's Race",
    author: 'Astead Herndon',
    date: '10/11/2018',
    text:
      'The Republican candidate, who is also the secretary of state, defended his office after a report that registrations for more than 50,000 voters had been placed on a "pending" list.',
    url:
      'https://www.nytimes.com/2018/10/11/us/politics/georgia-voter-registration-kemp-abrams.html',
    image:
      'https://static01.nyt.com/images/2018/10/12/us/politics/12georgia-1-print/merlin_145096128_98d08c1a-9ad8-4763-a8ce-5a90811f4a36-articleLarge.jpg',
    comments: []
  },
  {
    title: 'Why Rent Control Is A Lightning Rod',
    author: 'Conor Dougherty',
    date: '10/12/2018',
    text:
      'Proposition 10 in California has put a new focus on an old question: whether rent control tends to ease or compound a shortage of affordable housing.',
    url:
      'https://www.nytimes.com/2018/10/12/business/economy/rent-control-explained.html',
    image:
      'https://static01.nyt.com/images/2018/10/13/business/13calhousing-print-dress-2/merlin_145130931_bfb34f04-dabc-406a-abcb-89644d9eb4cb-articleLarge.jpg',
    comments: []
  },
  {
    title:
      'Jared Kushner Paid No Federal Income Tax for Years, Documents Suggest',
    author: 'Jesse Drucker and Emily Flitter',
    date: '10/13/2018',
    text: `Confidential documents reviewed by The Times indicate that Jared Kushner, President Trump's son-in-law and adviser, probably paid little or no income tax from 2009 to 2016.`,
    url: 'https://www.nytimes.com/2018/10/13/business/jared-kushner-taxes.html',
    image:
      'https://static01.nyt.com/images/2018/10/14/business/14kushnersidebar/14kushnersidebar-blog427.png',
    comments: []
  },
  {
    title: 'Code Name Jane: The Women Behind a Covert Abortion Network',
    author: 'Clyde Haberman',
    date: '10/14/2018',
    text:
      'In the years before abortion became legal, a clandestine group helped women with unwanted pregnancies get around the law.',
    url: 'https://www.nytimes.com/2018/10/14/us/illegal-abortion-janes.html',
    image:
      'https://static01.nyt.com/images/2018/10/16/us/RR350_THUMBA_MASTER_JANE_mugshot_P0104_HiRes_16x9/RR350_THUMBA_MASTER_JANE_mugshot_P0104_HiRes_16x9-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale',
    comments: []
  },
  {
    title:
      "'I Don't Know That It's Man-Made,' Trump Says of Climate Change. It Is.",
    author: 'Lisa Friedman',
    date: '10/15/2018',
    text: `President Trump now denies denying climate change. In an interview on Sunday with CBS's "60 Minutes," Mr. Trump backed off his long-held claim that global warming is a hoax. But he also made several new assertions unsupported by science.`,
    url:
      'https://www.nytimes.com/2018/10/15/climate/trump-climate-change-fact-check.html',
    image:
      'https://static01.nyt.com/images/2018/10/15/climate/15cli-trumpfactcheck-umbrella/15cli-trumpfactcheck-umbrella-superJumbo.jpg?quality=90&auto=webp',
    comments: []
  }
];

db.Article.remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
