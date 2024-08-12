<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Profile\Shopware6\Converter;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\Converter\ConvertStruct;
use SwagMigrationAssistant\Migration\DataSelection\DefaultEntities;
use SwagMigrationAssistant\Migration\MigrationContextInterface;
use SwagMigrationAssistant\Profile\Shopware6\DataSelection\DataSet\CategoryDataSet;
use SwagMigrationAssistant\Profile\Shopware6\Shopware6MajorProfile;

#[Package('services-settings')]
class CategoryConverter extends ShopwareMediaConverter
{
    public function supports(MigrationContextInterface $migrationContext): bool
    {
        return $migrationContext->getProfile()->getName() === Shopware6MajorProfile::PROFILE_NAME
            && $this->getDataSetEntity($migrationContext) === CategoryDataSet::getEntity();
    }

    public function getMediaUuids(array $converted): ?array
    {
        $mediaIds = [];
        foreach ($converted as $category) {
            if (isset($category['media']['id'])) {
                $mediaIds[] = $category['media']['id'];
            }
        }

        return $mediaIds;
    }

    protected function convertData(array $data): ConvertStruct
    {
        $converted = $data;

        $this->mainMapping = $this->getOrCreateMappingMainCompleteFacade(
            DefaultEntities::CATEGORY,
            $data['id'],
            $converted['id']
        );

        $this->updateAssociationIds(
            $converted['translations'],
            DefaultEntities::LANGUAGE,
            'languageId',
            DefaultEntities::CATEGORY
        );

        if (isset($converted['media'])) {
            $this->updateMediaAssociation($converted['media']);
        }

        unset(
            // handled when layouts selected for migration
            $converted['cmsPageId']
        );

        return new ConvertStruct($converted, null, $this->mainMapping['id'] ?? null);
    }
}
