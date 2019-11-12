import React from 'react'
import {Pagination} from 'antd'
import ResourceCard from '../resource-card/ResourceCard'

const ResourceList = ({
  resources,
  pagination,
  navigateTo
}) => {
  return (
    <div>
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
          <Pagination
            total={pagination.totalCount}
            current={pagination.currentPage}
            pageSize={pagination.perPage}
            onChange={(page) => navigateTo(page)}
          />
        )
      }
    </div>
  )
}

export default ResourceList;
