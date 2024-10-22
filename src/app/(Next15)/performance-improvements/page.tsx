import Container from "@/components/container";
import Prose from "@/components/prose";

export default function Page() {
  return (
    <>
      <Container>
        <Prose>
          <h1 className="m-0">Next JS 15</h1>
          <p className="m-0">Performance Improvements</p>
        </Prose>
      </Container>
      <Container>
        <Prose>
          <h2>TurboPack for development</h2>
          <p>
            {" "}
            TurboPack is a new feature in Next.js 15 that allows you to build
            your application in stages, improving build times and reducing the
            amount of work Next.js needs to do during development.
          </p>

          <p>TurboPack has seen improvements in the following areas:</p>
          <ul>
            <li>25–35% reduction in memory usage.</li>
            <li>
              30–50% faster compilation for large pages with thousands of
              modules.
            </li>
          </ul>
        </Prose>
      </Container>
      <Container>
        <Prose>
          <h2>Caching</h2>
          <p>
            In Next 14 and earlier, Next would cache fecth requests, Route
            handlers and client Router PropTypes.resetWarningCache by defualt.
          </p>

          <p>
            Next 15 does the oppsite, fetch requests are not cached by default.
          </p>

          <p>
            Previously Next would use <code>force-cache</code> to fetch a
            resource from the cache (if it exists) or a remote server and update
            the cache cache
          </p>
          <p>
            Next 15 will now use <code>no-store</code> to fetch a resource from
            a remote server on every request and not update the
          </p>

          <p>
            This means that fetch requests will no longer be cached by default.
          </p>

          <p>However, You can still opt into caching fetch requests by:</p>
          <ul>
            <li>
              Setting the cache option to <code>force-cache</code> in a single
              fetch call
            </li>
            <li>
              Setting the dynamic route config option to{" "}
              <code>'force-static'</code> for a single route
            </li>
            <li>
              Setting the fetchCache route config option to{" "}
              <code>'default-cache' </code>to override all fetch requests in a
              Layout or Page to use force-cache unless they explicitly specify
              their own cache option
            </li>
          </ul>
        </Prose>
      </Container>
    </>
  );
}
