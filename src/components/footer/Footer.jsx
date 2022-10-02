import "./footer.scss";

export default function Footer() {
	return (
		<div data-testid="footer" className="footer">
			<p>Powered by</p>
			<a href="https://docs.openaq.org/docs" title="Free Air Quality API">
				OpenAQ
			</a>
		</div>
	);
}
