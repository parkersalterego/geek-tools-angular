import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: '../html/people.html',
  styleUrls: ['../css/people.css']
})
export class PeopleComponent {

  public people = [
    {
      name : 'Terry Solis',
      position : 'Champion of Geeks.',
      skillset : 'I am a learner - once I set my mind to it there is nothing I can\’t learn, I see things from a different perspective, I\’m okay with failing and getting back up again, I believe in others wholeheartedly, success to me is making a difference… I think you want a list of things more like \“I type 45 WPM, I have a degree in …,\” but the information I\’ve provided is what I consider my authentic skillset.',
      languages : 'English, Spanish, HTML, CSS, JS.',
      img : '',
      mantra : 'Just keep swimming, keep on swimming.',
      email : 'tsolis@bitwiseindustries.com',
      slackname : 'tsolis',
      likes : 'People, creating/implementing people oriented solutions, empowering others, advocating, networking with others, people watching/studying, sociology, psychology.',
      dislikes : 'I CAN\’T STAND - NON-Sense/DRAMA, chaos or messy work spaces.',
      interests : 'Writing and reading about anything (including instructions), arts and craft (Pinterest/YouTube DIY), all steam punk, designing small spaces, All things Art/Music, I LOVE VINTAGE SHOES ... don\’t own any, all time favorite gift is my Github keychain, receiving small tokens of appreciation (a card, a thank you note/email, trinket of some kind) stuff only I know I received, experiencing the success of others (this is what gets me up every morning); Shows I like: \“Lie to Me\” - \“Person of Interest\” - \“White Collar\” - \“Downton Abby\”, all of Jackie Chan\’s movies, Kevin Hart comedies, Vengaboys - \"We like to party\" (all time favorite song), cumbia and salsa music, love to dance, bright primary colors - plus greens and browns.  I love to give trinket gifts as well, not on typical Birthdays or expected dates.',
    }
  ];
}
