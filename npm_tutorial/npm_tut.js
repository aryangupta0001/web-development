console.log("This is npm tutorial");

// [npm init] :- This command is used to initialise the folder as a node package.


/* package.json :-This file contains all the informatioon of our package.

Once we initialising the folder as a node package, the node keeps adding all the modules/packages installed in this folder into the package.json as dependencies.

When we uninstall any package from this folder, the node updates the package.json acccordingly (i.e it removes that packacge from the dependencies)
*/

/* dev-dependencies :- There are some dependencies which we need only in the development process and not in the production, so we can install them by giving [--save-dev] attribute in the install command.

For Example :-- npm install nodemon --save-dev

These dependencies are then added as devDepencies in package.json file.
*/



/* node_modules :- node_modules is a folder made inside any folder after initialising that folder as a package.

node_modules keeps all the modules that we install in our package. All the dependencies and their own dependencies (dependencies-of-dependencies) are kept inside the node_modules.

If node_modules is deleted accidentaly, then it can be made again with the command :- [npm install]

containing all the dependencies, the node_modules folder becomes too heavy to be shared or uploaded online. So it is not shared while giving the programm files to anybody. It can be formed anytime with the [npm install] command easily.
*/



/* with the npm [install pkg_name], the latest available version is installed by-default. But if we want to install a specific version, than we can specify the version as:- [npm install pkg_name@x.y.z]

For Example :- npm install slugify@1.2.9

    x --> major version     (major changes in the functions)
    y --> minor version     (minor updates in the funcitons)
    z --> patch             (bug fixes)

*/
