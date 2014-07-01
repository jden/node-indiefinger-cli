# indiefinger-cli
cli tool for indiefinger, a webfinger superset

## usage
```console
$ indiefinger [user@]host

        example:
                indiefinger www.w3c.org
```


## returns

an [RFC 7033](https://tools.ietf.org/html/rfc7033) JSON recource descriptor ([jrd](https://tools.ietf.org/html/rfc7033#section-4.4)):

```json
{
  "subject": "http://www.w3.org",
  "links": [
    {
      "rel": "Help",
      "href": "/Help/"
    },
    {
      "rel": "stylesheet",
      "href": "/2008/site/css/minimum"
    },
    {
      "rel": "stylesheet",
      "href": "/2008/site/css/minimum"
    },
    {
      "rel": "stylesheet",
      "href": "/2008/site/css/print"
    },
    {
      "rel": "shortcut",
      "href": "/2008/site/images/favicon.ico"
    },
    {
      "rel": "icon",
      "href": "/2008/site/images/favicon.ico"
    },
    {
      "rel": "alternate",
      "href": "/blog/news/feed/atom"
    },
    {
      "rel": "bookmark",
      "href": "http://www.w3.org/blog/2014/06/this-week-663399-w3c-comma-tools-firefox-webide-etc/"
    },
    {
      "rel": "bookmark",
      "href": "http://www.w3.org/blog/2014/06/this-week-html5-last-call-w3c20-tim-berners-lee-at-fens2014-663399becca-etc/"
    },
    {
      "rel": "bookmark",
      "href": "http://www.w3.org/blog/2014/06/html5-on-our-way-to-recommendation/"
    },
    {
      "rel": "nofollow",
      "href": "http://www.sics.se"
    },
    {
      "rel": "nofollow",
      "href": "http://www.sics.se"
    }
  ]
}
```


## installation

    $ npm install -g indiefinger-cli


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
