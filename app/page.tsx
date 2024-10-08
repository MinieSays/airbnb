import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingsParams
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  const isEmpty = true;

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState subtitle="" showReset />
      </ClientOnly>
    );
  }


  return (
    <ClientOnly>
      <Container>
        <div
          className=" 
    pt-40
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    gap-8
    "
        >
          {listings.map((listing) => {
            return (
              <div key={listing.title}>
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              </div>
            );
          })}
        </div>
      </Container>
      <div className="w-full mt-4 mb-[500px]">
          <div className="relative mx-auto" style={{ paddingBottom: "200px", maxWidth: "800px" }}>
            <iframe
              src="https://www.loom.com/embed/64a176fb082540e4aeb222fa5787ccec?sid=1e247dd3-4e3a-4711-92c6-a3e50707e01d"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
              style={{ height: "400px" }} 
            ></iframe>
          </div>
        </div>
    </ClientOnly>
  );
}

export default Home;
