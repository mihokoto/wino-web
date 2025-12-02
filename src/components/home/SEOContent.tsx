import Link from "next/link";

export function SEOContent() {
    return (
        <section className="py-24 px-6 border-t border-white/5 bg-wino-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500 max-w-2xl">
                        Everything you need to know about finding factory prices and avoiding the "Viral Tax."
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed text-gray-400">

                    {/* Column 1 */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white font-bold text-base mb-2">How do I find the original supplier of a TikTok product?</h3>
                            <p>
                                Most viral products on TikTok are "dropshipped" from China. Instead of buying from the link in the bio, simply share the video to the <strong>Wino App</strong>. Our visual intelligence engine performs a reverse image search across marketplaces like Temu, AliExpress, and 1688 to find the exact factory source for up to 90% off.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-base mb-2">Is Wino a free alternative to Google Lens?</h3>
                            <p>
                                Yes. While Google Lens is designed for general information, Wino is optimized specifically for <strong>shopping and price comparison</strong>. Unlike Google, Wino automatically extracts product thumbnails, finds active coupon codes, and saves items to your wishlist for later.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-base mb-2">Why are Amazon prices so much higher than Temu?</h3>
                            <p>
                                Amazon sellers often act as middlemen. They buy bulk inventory from manufacturers (often found on Temu or Alibaba), add their own logo, and markup the price to cover Prime shipping and advertising fees. Wino helps you bypass this markup by finding the direct-to-consumer listing.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white font-bold text-base mb-2">Can I use Wino for Dropshipping Product Research?</h3>
                            <p>
                                Absolutely. Wino is the perfect free tool for dropshippers. Instead of paying $99/month for tools like Minea or Pipiads, you can use Wino to track viral trends, validate product costs, and find suppliers instantly on your mobile device.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-base mb-2">Is it safe to buy from AliExpress or Temu?</h3>
                            <p>
                                Generally, yes. These platforms connect you directly to manufacturers. Wino helps you find listings with high ratings and sales volume. By cutting out the middleman boutique, you get the exact same plastic product without the "Branding Tax."
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-base mb-2">Where can I download the Wino APK?</h3>
                            <p>
                                Wino is currently available as a direct download for Android. You can <Link href="/install" className="text-wino-orange hover:underline">get the official APK here</Link>. We bypass the app store to give you features (like direct link injection) that Google Play restricts.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
