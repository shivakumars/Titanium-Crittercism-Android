# Titanium Crittercism For Android

A Wrapper around crittercism [android sdk.](https://app.crittercism.com/downloads/download/crittercism_v3_2_0_sdkonly.jar) And now you can use this module to use Crittercism with Titanium Appcelerator.

## Steps to Integrate

You can download the module zip directly from [here](http://bit.ly/1eSsTTp)

Copy this to your AndroidManifest.xml

Verify you have the INTERNET permission in between the &lt;manifest&gt; ... &lt;/manifest&gt; tags:

    <uses-permission android:name="android.permission.INTERNET"/>

For more granular data, you can optionally add the following two permissions.

1. The READ_LOGS permission will allow you to get LOGCAT information when a crash occurs:

        <uses-permission android:name="android.permission.READ_LOGS"/>
     
2. The GET_TASKS permission will allow you to see which activity was active when a crash occurs:

        <uses-permission android:name="android.permission.GET_TASKS"/>

2. Here is how you initiate Crittercism

        var crittercism = require("in.shivakumars.crittercism");
        
        crittercism.initializeCrittercism({
            apiKey : "YOUR_API_KEY",
            includeVersionName : false,
	        includeVersionCode : false,
	        userName : "shiva"
        });

##ToDo
- Need to wrap Handled Exceptions function (Crittercism Premium Feature)
- Need to wrap Breadcrumb function (Crittercism Premium Feature)
- Need to wrap Get Crash Info For Previous Session
- Need to wrap Include Logcat function
- Need to wrap Rate My App function

And much more

## License

    Apache License
    Version 2.0, January 2004
    http://www.apache.org/licenses/