#Site Template 1

### Core Features (that can't be found in the link):
- Set up to open dev environment in 'Ish', a powerful tool for mobile-design testing. (http://bradfrost.com/demo/ish/) 

####Functionality inspired by ZURB
Most features can be found here for now:
https://github.com/zurb/foundation-zurb-template/blob/master/readme.md

##Installation

To use this template, your computer needs:

- NodeJS (0.12 or greater)
- Git

##Using Git

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/btn0s/site-template-1 projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called dist, viewable at this URL:

```bash
http://localhost:8000
```

To create compressed, production-ready assets, run:

```bash
gulp build --production.
```