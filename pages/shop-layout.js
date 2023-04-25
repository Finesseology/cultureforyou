import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/shop-page-styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function shopLayout() {
	return (
		<main className={styles.main}>
			<div>This is shop page</div>
		</main>
	);
}
