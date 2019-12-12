import React from 'react'
import {Pagination, Button} from 'antd'
import {Link} from 'gatsby'

import ResourceCard from '../resource-card/ResourceCard'

import * as styles from './ResourceList.style'

const ResourceList = ({
  resources,
  pagination,
  seeMore,
  getPageUrl
}) => {
  return (
    <div>
      <div>
        {
          resources.map(resource => (
            <div
              css={styles.item}
              key={resource.slug}
            >
              <ResourceCard
                {...resource}
              />
            </div>
          ))
        }
      </div>
      {
        pagination && pagination.pageCount > 1 && (
          <div css={styles.pagination}>
            {
              pagination.previousPage && (
                <Button size="large">
                  <Link to={getPageUrl(pagination.previousPage)}>
                    Prev ({pagination.previousPage})
                  </Link>
                </Button>
              )
            }
            {
              pagination.nextPage && (
                <Button size="large">
                  <Link to={getPageUrl(pagination.nextPage)}>
                    Next ({pagination.nextPage})
                  </Link>
                </Button>
              )
            }
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
