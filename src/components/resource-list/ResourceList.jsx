import React from 'react'
import {Pagination, Button} from 'antd'
import {Link} from 'gatsby'

import ResourceCard from '../resource-card/ResourceCard'

import * as styles from './ResourceList.style'

const ResourceList = ({
  resources,
  pagination,
  seeMore,
  navigateTo
}) => {
  return (
    <div css={styles.base}>
      {
        resources.map(resource => (
          <div
            style={{ marginBottom: '1rem' }}
            key={resource.slug}
          >
            <ResourceCard
              {...resource}
            />
          </div>
        ))
      }
      {
        pagination && pagination.pageCount > 1 && (
          <div css={styles.pagination}>
            <Pagination
              total={pagination.totalCount}
              current={pagination.currentPage}
              pageSize={pagination.perPage}
              onChange={(page) => navigateTo(page)}
            />
          </div>
        )
      }
      {
        seeMore && (
          <div css={styles.more}>
            <Button size="large">
              <Link to={seeMore}>
                See all resources
              </Link>
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default ResourceList;
