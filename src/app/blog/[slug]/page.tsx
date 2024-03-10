export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
export function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
}