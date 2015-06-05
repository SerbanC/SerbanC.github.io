# SerbanC.github.io (aka serbancarjan.ro)
My personal page repo

So I used the [gulp-webapp generator from Yeoman](https://github.com/yeoman/generator-gulp-webapp) because I got this domain to sandbox stuff, and I had just got around to Yeoman.

Managed to get this up and running by only paying for the domain itself. So no running costs (.ro domains are one-time payment, for life). Got the hosting here on GitHub Pages and [created a CNAME](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) to serbancarjan.ro, then got nameservers from [freedns.ro](http://www.freedns.ro/)

I don't think there's really anything other than good old handywork that could be well fit for a one-screen-thirty-word website, and the Yeoman webapp considers much more complexity, so naturally the site is bloated as fuck out of the box (96% unused CSS rules?). Keeping only the (tenish) bootstrap classes I'm actually using would be, I think, a little weird and a lot more work than it's worth because of the variable dependencies, so the CSS refactoring will be done from the ground up a little later.

For now I removed all JS libraries, plugins and modules, cause I'm not using any. Any JS at all, actually. Big feat, I know.

**TODO:**
* get rid of Bootstrap;
* maybe streamline the gulpfile to clean all the unused stuff, learn more Gulp than just running tasks in the process;
* add a photo? perhaps;
