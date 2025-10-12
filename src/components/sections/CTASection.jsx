import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to unlock the full potential of your data?
          </h2>
          <p className="text-xl mb-8 text-accent">
            Let us help you transform your data into a powerful asset that drives smarter decisions, streamlined operations, and real competitive edge.
          </p>
          <Button href="/contact/" variant="white" size="lg">
            Contact Us Today
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;