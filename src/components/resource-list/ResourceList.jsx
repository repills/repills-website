import React from 'react'
import {Icon, Button} from 'antd'
import {Link} from 'gatsby'

import ResourceCard from '../resource-card/ResourceCard'

import * as styles from './ResourceList.style'
import { getIconFromType } from '../../utils/resources/ui'

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
                icon={getIconFromType(resource.rawTypes)}
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
                    <Icon type="left" />
                    Page {pagination.previousPage}
                  </Link>
                </Button>
              )
            }
            {
              pagination.nextPage && (
                <Button size="large">
                  <Link to={getPageUrl(pagination.nextPage)}>
                    Page {pagination.nextPage}
                    <Icon type="right" />
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
