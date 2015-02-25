# SilverStripe Font Awesome Icon Picker Field
Font Awesome Icon Picker for SilverStripe 3.x based on http://mjolnic.com/fontawesome-iconpicker

Maintainer Contacts
-------------------
*  Darren-Lee Joseph `<darrenleejoseph (at) gmail (dot) com>`


Requirements
------------
* SilverStripe 3.1


Installation Instructions
-------------------------

Installation can be done either by composer or by manually downloading a release.

### Via composer (best practice)

`composer require "thisisbd/silverstripe-fontawesome-iconpickerfield:*"`

### Manually

 1.  Download the module from [the releases page](https://github.com/thisisbd/silverstripe-fontawesome-iconpickerfield/releases).
 2.  Extract the file (if you are on windows try 7-zip for extracting tar.gz files
 3.  Make sure the folder after being extracted is named 'fontawesome-iconpickerfield'
 4.  Place this directory in your sites root directory. This is the one with framework and cms in it.
 5.  Visit `<yoursite.com>/?flush` to clear the manifest cache.


Usage Overview
--------------

    private static $db = array(
        'FontAwesomeIcon' => 'Varchar'
    );


In `getCMSFields` do this or something similar:

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab(
    	    'Root.Main',
    	    FontAwesomeIconPickerField::create('FontAwesomeIcon', 'Font Awesome Icon')
        );

        return $fields;
    }



Known Issues
------------
There are no known issues.