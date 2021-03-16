import { createAgent, IResolver } from "@veramo/core";
import { DIDResolverPlugin, UniversalResolver } from "@veramo/did-resolver";
import { Resolver, DIDResolver } from "did-resolver";

const uniresolver = new UniversalResolver({
  url: "https://uniresolver.io/1.0/identifiers/",
}) as DIDResolver;

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      resolver: new Resolver({
//         key: uniresolver,
        web: uniresolver,
//         ethr: uniresolver,
      }),
    }),
  ],
});

(async () => {
  const doc = await agent.resolveDid({
    didUrl: "did:web:did.actor:alice",
  });

  console.log(doc);
})();
