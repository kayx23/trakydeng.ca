// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';


const Tags = ({ tags, tagSlugs }) => (
  <div className={styles['feed__item-tags']}>
    {tagSlugs && tagSlugs.map((slug, i) => (
      <Link to={slug} className={styles['feed__item-tags-link']} key={tags[i]}>{tags[i]} </Link>
    ))}
  </div>
);


type Props = {
  edges: Edges
};


const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
            {new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          {/* <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span> */}
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>

        <div className={styles['feed__item-tag-container']}>
          {/* <p>Tags:</p> */}
          {edge.node.frontmatter.tags && edge.node.fields.tagSlugs && <Tags tags={edge.node.frontmatter.tags} tagSlugs={edge.node.fields.tagSlugs} />}
        </div>


        {/* <div className={styles['feed__item-readmore']}>
          <Link className={styles['feed__item-readmore-text']} to={edge.node.fields.slug}>Read</Link>
        </div> */}

      </div>
    ))}
  </div>
);

export default Feed;
