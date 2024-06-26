# Lithuanian ID Tool

Small SPA to play around with using Svelte and GitHub pages.
Core functionality revolves around decoding Lithuanian ID codes as done in previous projects with other programming languages:
- [Python/Django](https://github.com/EErikas/personal_id_tool)
- [C#](https://github.com/EErikas/personal_id_tool_c-)

## Personal ID Generation rules
The personal code consists of 11 digits, for example: 33309240064:

* **The first** shows the centenary of birth and the gender of the person 
  + 1 - 19th century male, 2 - 19th century female, 
  + 3 - 20th century male, 4 - 20th century female, 
  + 5 - 21st century male, 6 - 21st century female;
* **The next six** are the last two digits of the person's year of birth, month (two digits), day (two digits)\
  **Note:** there is a rare exeception for elderly people who cannot remember the month or day of their birthdate, in such case the month or day numbers are replaced by 0s. In the site such cases show NA instead of the 0s;
* **The next three** digits are the number of those born on that day;
* **The last one** is a check digit derived from other digits according to the following rules:

  + If the personal code is written ABCDEFGHIJK:\
    S = A * 1 + B * 2 + C * 3 + D * 4 + E * 5 + F * 6 + G * 7 + H * 8 + I * 9 + J * 1
  + The sum S is divided by 11, and if the remainder is not equal to 10, it is the control number K. 
  + If the remainder is 10, a new sum is calculated with the following weighting factors:\
    S = A * 3 + B * 4 + C * 5 + D * 6 + E * 7 + F * 8 + G * 9 + H * 1 + I * 2 + J * 3
  + This sum S is again divided by 11, and if the remainder is not equal to 10, it is a control number K. 
  + If the remainder is 10, the control number K is 0.

The tool allows user to detect personal ID numbers or to generate random IDs, that meet the official requirements. 

**Note** this is meant to be as an educational tool to illustrate how Lithuanian personal IDs can be generated. Please do not use the codes generted here for any illicit activities.

### Todo:
- [x] General Logic for decoding IDs
- [x] Random generation of valid IDs
- [x] Basic UI to interface with the code
- [x] Output information about the provided ID
- [x] Display information about wrong input on the page
- [x] Add translations for Lithuanian and English
- [x] Set up Github pages and Github action to build it
- [ ] Convert to TypeScript
- [ ] Add Linting/Testing steps before deployment
- [ ] Make it possible for the app to be installed as a PWA
- [ ] ...