# Main
### Village Pump
### https://en.wikipedia.org/wiki/Wikipedia:Village_pump
### Technical Issues
### Community Portal
### https://en.wikipedia.org/wiki/Wikipedia:Community_portal
# Api
### https://en.wikipedia.org/w/api.php?action=query&titles=Operating_system&prop=revisions&rvprop=content&format=json
### example api call
# Tags to note
### Current Interest
### Hobby
### Remotely Related
### Related
### Floating
# Sister Projects
### Wikimedia Commons
### https://commons.wikimedia.org/wiki/Main_Page
### Free Media
### Wikibooks
### https://en.wikibooks.org/wiki/Main_Page
### Free Text books and Manuals, Extensive
### Computer Programming
### https://en.wikibooks.org/wiki/Subject:Computer_programming
### Education
### https://en.wikibooks.org/wiki/Subject:Education
### Wikidata
### https://www.wikidata.org/wiki/Wikidata:Main_Page
Wikidata is a project of the Wikimedia Foundation: a free, collaborative, multilingual, secondary database, collecting structured data to provide support for Wikipedia, Wikimedia Commons, the other Wikimedia projects, and well beyond that.
### Used By All Other Wiki projects: Wikipedia, MediaWiki, Wikimedia .. etc
### Accessing Data
### API
### https://www.mediawiki.org/wiki/Wikibase/API
### https://www.wikidata.org/w/api.php?action=help&recursivesubmodules=1
### api guide page
### parameters
Parameters:actionWhich action to perform.One value: abusefiltercheckmatch, abusefilterchecksyntax, abusefilterevalexpression, abusefilterunblockautopromote, aggregategroups, antispoof, block, bouncehandler, centralauthtoken,centralnoticechoicedata, centralnoticequerycampaign, checktoken, cirrus-config-dump, cirrus-mapping-dump, cirrus-settings-dump, cirrus-suggest, clearhasmsg, compare, createaccount,delete, deleteglobalaccount, echomarkread, echomarkseen, edit, editmassmessagelist, emailuser, expandtemplates, fancycaptchareload, featuredfeed, feedcontributions, feedrecentchanges,feedwatchlist, filerevert, flow, flow-parsoid-utils, flowthank, globalblock, globaluserrights, groupreview, help, imagerotate, import, jsonconfig, languagesearch, login, logout, managetags,massmessage, mobileview, move, opensearch, options, paraminfo, parse, parsoid-batch, patrol, protect, purge, query, revisiondelete, rollback, rsd, scribunto-console, searchtranslations,setglobalaccountstatus, setnotificationtimestamp, sitematrix, spamblacklist, stashedit, strikevote, tag, templatedata, thank, titleblacklist, tokens, transcodereset, translatesandbox,translateuser, translationaids, translationreview, translationstash, ttmserver, ulslocalization, unblock, undelete, upload, userdailycontribs, userrights, visualeditor, visualeditoredit, watch,wbavailablebadges, wbcreateclaim, wbcreateredirect, wbeditentity, wbformatvalue, wbgetclaims, wbgetentities, wblinktitles, wbmergeitems, wbparsevalue, wbremoveclaims,wbremovequalifiers, wbremovereferences, wbsearchentities, wbsetaliases, wbsetclaim, wbsetclaimvalue, wbsetdescription, wbsetlabel, wbsetqualifier, wbsetreference, wbsetsitelink,wbsgetsuggestionsDefault: helpformatThe format of the output.One value: dbg, dbgfm, json, jsonfm, none, php, phpfm, rawfm, txt, txtfm, xml, xmlfm, yaml, yamlfmDefault: jsonfmmaxlagMaximum lag can be used when MediaWiki is installed on a database replicated cluster. To save actions causing any more site replication lag, this parameter can make the client wait until the replication lag is less than the specified value. In case of excessive lag, error code maxlag is returned with a message like Waiting for $host: $lag seconds lagged.See Manual: Maxlag parameter for more information.Type: integersmaxageSet the s-maxage HTTP cache control header to this many seconds. Errors are never cached.Type: integerDefault: 0maxageSet the max-age HTTP cache control header to this many seconds. Errors are never cached.Type: integerDefault: 0assertVerify the user is logged in if set to user, or has the bot user right if bot.One value: user, botrequestidAny value given here will be included in the response. May be used to distinguish requests.servedbyInclude the hostname that served the request in the results.Type: boolean (details)curtimestampInclude the current timestamp in the result.Type: boolean (details)originWhen accessing the API using a cross-domain AJAX request (CORS), set this to the originating domain. This must be included in any pre-flight request, and therefore must be part of the request URI (not the POST body). This must match one of the origins in the Origin header exactly, so it has to be set to something like https://en.wikipedia.org orhttps://meta.wikimedia.org. If this parameter does not match the Origin header, a 403 response will be returned. If this parameter matches the Origin header and the origin is whitelisted, an Access-Control-Allow-Origin header will be set.uselangLanguage to use for message translations. A list of codes may be fetched from action=query&meta=siteinfo with siprop=languages, or specify user to use the current user's language preference, or specify content to use this wiki's content language.Default: usercentralauthtokenWhen accessing the API using a cross-domain AJAX request (CORS), use this to authenticate as the current SUL user. Use action=centralauthtoken on this wiki to retrieve the token, before making the CORS request. Each token may only be used once, and expires after 10 seconds. This should be included in any pre-flight request, and therefore should be included in the request URI (not the POST body).
### actions
abusefiltercheckmatch, abusefilterchecksyntax, abusefilterevalexpression, abusefilterunblockautopromote, aggregategroups, antispoof, block, bouncehandler, centralauthtoken,centralnoticechoicedata, centralnoticequerycampaign, checktoken, cirrus-config-dump, cirrus-mapping-dump, cirrus-settings-dump, cirrus-suggest, clearhasmsg, compare, createaccount,delete, deleteglobalaccount, echomarkread, echomarkseen, edit, editmassmessagelist, emailuser, expandtemplates, fancycaptchareload, featuredfeed, feedcontributions, feedrecentchanges,feedwatchlist, filerevert, flow, flow-parsoid-utils, flowthank, globalblock, globaluserrights, groupreview, help, imagerotate, import, jsonconfig, languagesearch, login, logout, managetags,massmessage, mobileview, move, opensearch, options, paraminfo, parse, parsoid-batch, patrol, protect, purge, query, revisiondelete, rollback, rsd, scribunto-console, searchtranslations,setglobalaccountstatus, setnotificationtimestamp, sitematrix, spamblacklist, stashedit, strikevote, tag, templatedata, thank, titleblacklist, tokens, transcodereset, translatesandbox,translateuser, translationaids, translationreview, translationstash, ttmserver, ulslocalization, unblock, undelete, upload, userdailycontribs, userrights, visualeditor, visualeditoredit, watch,wbavailablebadges, wbcreateclaim, wbcreateredirect, wbeditentity, wbformatvalue, wbgetclaims, wbgetentities, wblinktitles, wbmergeitems, wbparsevalue, wbremoveclaims,wbremovequalifiers, wbremovereferences, wbsearchentities, wbsetaliases, wbsetclaim, wbsetclaimvalue, wbsetdescription, wbsetlabel, wbsetqualifier, wbsetreference, wbsetsitelink,wbsgetsuggestions
### query
action=query(main | query)This module requires read rights.Source: MediaWikiLicense: GPL-2.0+Fetch data from and about MediaWiki.All data modifications will first have to use query to acquire a token to prevent abuse from malicious sites.https://www.mediawiki.org/wiki/API:Queryhttps://www.mediawiki.org/wiki/API:Metahttps://www.mediawiki.org/wiki/API:Propertieshttps://www.mediawiki.org/wiki/API:ListsParameters:propWhich properties to get for the queried pages.Values (separate with |): categories, categoryinfo, contributors, deletedrevisions, duplicatefiles, extlinks, extracts, fileusage, flowinfo, globalusage, imageinfo, images, info, iwlinks, langlinks,links, linkshere, pageimages, pageprops, pageterms, redirects, revisions, stashimageinfo, templates, transcludedin, transcodestatus, videoinfolistWhich lists to get.Values (separate with |): abusefilters, abuselog, allcategories, alldeletedrevisions, allfileusages, allimages, alllinks, allpages, allredirects, alltransclusions, allusers, backlinks, betafeatures,blocks, categorymembers, centralnoticelogs, checkuser, checkuserlog, deletedrevs, embeddedin, exturlusage, filearchive, gadgetcategories, gadgets, globalallusers, globalblocks,globalgroups, imageusage, iwbacklinks, langbacklinks, logevents, messagecollection, mmsites, pagepropnames, pageswithprop, prefixsearch, protectedtitles, querypage, random,recentchanges, search, tags, usercontribs, users, watchlist, watchlistraw, wikisetsmetaWhich metadata to get.Values (separate with |): allmessages, featureusage, filerepoinfo, globaluserinfo, languagestats, messagegroups, messagegroupstats, messagetranslations, notifications, siteinfo, tokens,userinfo, wikibaseindexpageidsInclude an additional pageids section listing all returned page IDs.Type: boolean (details)exportExport the current revisions of all given or generated pages.Type: boolean (details)exportnowrapReturn the export XML without wrapping it in an XML result (same format as Special:Export). Can only be used with export.Type: boolean (details)iwurlWhether to get the full URL if the title is an interwiki link.Type: boolean (details)continueWhen more results are available, use this to continue.rawcontinueReturn raw query-continue data for continuation.Type: boolean (details)titlesA list of titles to work on.Separate values with |. Maximum number of values is 50 (500 for bots).pageidsA list of page IDs to work on.Type: list of integersSeparate values with |. Maximum number of values is 50 (500 for bots).revidsA list of revision IDs to work on.Type: list of integersSeparate values with |. Maximum number of values is 50 (500 for bots).generatorGet the list of pages to work on by executing the specified query module.Note: Generator parameter names must be prefixed with a "g", see examples.One value: allcategories, alldeletedrevisions, allfileusages, allimages, alllinks, allpages, allredirects, alltransclusions, backlinks, categories, categorymembers, deletedrevisions, duplicatefiles,embeddedin, exturlusage, fileusage, images, imageusage, iwbacklinks, langbacklinks, links, linkshere, messagecollection, pageswithprop, prefixsearch, protectedtitles, querypage, random,recentchanges, redirects, revisions, search, templates, transcludedin, watchlist, watchlistrawredirectsAutomatically resolve redirects in titles, pageids, and revids, and in pages returned by generator.Type: boolean (details)converttitlesConvert titles to other variants if necessary. Only works if the wiki's content language supports variant conversion. Languages that support variant conversion include gan, iu, kk, ku, shi, sr, tg, uz, zh.Type: boolean (details)Examples:Fetch site info and revisions of Main Page.api.php?action=query&prop=revisions&meta=siteinfo&titles=Main%20Page&rvprop=user|comment&continue=Fetch revisions of pages beginning with API/.api.php?action=query&generator=allpages&gapprefix=API/&prop=revisions&continue=
### rvprop
Which properties to get for each revision:idsThe ID of the revision.flagsRevision flags (minor).timestampThe timestamp of the revision.userUser that made the revision.useridUser ID of the revision creator.sizeLength (bytes) of the revision.sha1SHA-1 (base 16) of the revision.contentmodelContent model ID of the revision.commentComment by the user for the revision.parsedcommentParsed comment by the user for the revision.contentText of the revision.tagsTags for the revision.parsetreeThe XML parse tree of revision content (requires content model wikitext).
### convert wikitext to html
### http://stackoverflow.com/questions/5853357/is-there-is-any-library-to-convert-wikitext-to-html-format-using-php
### ...
### formats
### ...
### Composed of items that anyone can edit
### https://www.wikidata.org/wiki/Help:Items
### Example Page
### https://www.wikidata.org/wiki/Q568
### lithium
### attached is a bunch of concepts around this definition
### it's a secondary storage
### Third Party
### https://www.wikidata.org/wiki/Wikidata:Tools
### Uses
### http://wikiba.se/
### Wikibase
Welcome to the Wikibase projectWikibase is a collection of applications and libraries for creating, managing and sharing structured data. It is an open source project and everyone is welcome to join in development
### http://wikiba.se/components/
### Components
### Pain Points
### Is there a difference between wikidata and wikipedia index.php?
### Wikiversity
### https://en.wikiversity.org/wiki/Wikiversity:Main_Page
### Lessons
### Computer Science
https://en.wikiversity.org/wiki/Computer_Science_Course_Listing
### Game Design
### https://en.wikiversity.org/wiki/School:Game_design
### https://en.wikiversity.org/wiki/Computer_Science_Course_Listing
