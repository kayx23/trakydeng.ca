---
title: Forwarded and X-Forwarded-For HTTP Headers
date: "2023-06-18T21:30:00"
template: "post"
draft: false
slug: "forwarded-http-headers"
category: "Blog"
tags:
  - "Web Development"
  - "Computer Networks"
description: "Learn about `Forwarded` and `X-Forwarded-For` HTTP Headers"
---

<br>

If you are in web developer or have worked with a backend API, you may have seen the HTTP header field `X-Forwarded-For`, such as:

```
X-Forwarded-For: 192.168.0.7, 10.41.3.18, 10.172.238.178
```

You may also have seen a simialr header field `Forwarded` that looks like:

```
Forwarded: for=192.168.0.7; by=10.41.3.18; by=10.172.238.178
```

This blog explains how similar and different the two HTTP headers are. Their MDB web docs can be found at:

* [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)
* [Forwarded](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded)

## Comparisons

Both `Forwarded` and `X-Forwarded-For` are HTTP header fields used to indicate **the IP addresses of the original client and the route that a request took when forwarded across multiple proxy servers**. 

The `X-Forwarded-For` header emerged earlier. As the prefix `X-` indicates, it is not an official standard. The field contains a comma-separated list of IP addresses, where the leftmost IP address is the original client IP address and the following are IP addresses of the proxy servers that a request has been proxied through. The general format of the field is:

```
X-Forwarded-For: client, proxy1, proxy2
```

The `Forwarded` header field, on the other hand, is the official standard for conveying information about the connection between the client and the server. It is a newer standard defined in [RFC 7239 - Forwarded HTTP Extension](https://datatracker.ietf.org/doc/html/rfc7239) intending to replace the `X-Forwarded-For` header. 

In the `Forwarded` header, semicolons are used to separate the "field-value" pairs, while commas are used to separate multiple values within a single "field-value" pair.
For example, if a request went through two proxies, the `Forwarded` header could look like this:

```
Forwarded: for=client; by=proxy1; by=proxy2
```

## Which one to use

There are several reasons why you may want to use `Forwarded` over `X-Forwarded-For`: 

1. Standardization with RFC.
2. Flexibility. The `Forwarded` header supports more parameters and values, such as `proto` and `hostname`. This allows for more complex forwarding scenarios.

However, you may still want to use `X-Forwarded-For` for a few reasons, such as when working with legacy systems, or when backward compatibility is a requirement.

<br>
