// azuqua-core package Gruntfile.js

module.exports = function (grunt_) {

    var configObject = {
        pkg: grunt_.file.readJSON("package.json"),

        jshint: {
            files: [ 'Gruntfile.js', 'index.js', 'test/*.js' ],
            options: {
            }
        },

        // Execute server-side Mocha tests using the grunt-mocha-test module.
        // (Use grunt-mocha module for headless client-side testing within PhantomJS).
        mochaTest: {
            options: { reporter: 'spec', checkLeaks: true },
            src: [
                // This single scripts roles everything into a single, ordered,
                // suite of tests that should pass with failure. In the event of
                // failure, debug the failing test(s) individually using node_inspector
                // and mocha from the command line:
                // mocha --debug-brk test/failing-test.js <- breaks in node_inspector on test load
                'test/test-onmd-sic.js'
            ]
        }
    };

    grunt_.initConfig(configObject);

    grunt_.loadNpmTasks("grunt-contrib-clean");
    grunt_.loadNpmTasks("grunt-contrib-jshint");
    grunt_.loadNpmTasks("grunt-mocha-test");

    grunt_.registerTask("lint", [ "jshint" ]);
    grunt_.registerTask("test", [ "mochaTest" ]);
    grunt_.registerTask("default", [ "lint", "test" ]);

};
