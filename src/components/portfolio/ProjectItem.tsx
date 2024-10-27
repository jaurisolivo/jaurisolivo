"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import Card from "../ui/Card";

import styles from "./ProjectItem.module.scss";

type Props = {
	name: string;
	date: {
		start: string;
		end: string;
	};
	stack: string[];
	href: string;
	description: string;
};

const ProjectItem = (props: Props) => {
	const clickHandler = (event: React.MouseEvent) => {
		if (props.href === "#") {
			event.preventDefault();
		}
	};

	useEffect(() => {}, []);

	return (
		<Card>
			<Link
				href={props.href}
				target="_blank"
				title={props.name}
				className={styles.rootContainer}
				onClick={clickHandler}
			>
				<div className={styles.top}>
					<h3 className={styles.title}>{props.name}</h3>
					<aside className={styles.info}>
						<p className={styles.date}>
							{props.date.start}
							{props.date.end && " – " + props.date.end}
						</p>
						<ul className={styles.techList}>
							{props.stack.map((tech) => (
								<li key={tech} title={tech}>
									<Image
										src={`/assets/icons/stack/${tech.replace(".", "-")}.svg`}
										alt={tech}
										width="24"
										height="24"
										priority
									/>
								</li>
							))}
						</ul>
					</aside>
				</div>
				<div className={styles.demo}>
					<Image
						src={`/assets/images/projects/${props.name}.jpg`}
						alt={props.name}
						fill
                        sizes="320px"
						priority
						className={styles.screen}
					/>
				</div>
				<p className={styles.description}>{props.description}</p>
			</Link>
		</Card>
	);
};

export default ProjectItem;
