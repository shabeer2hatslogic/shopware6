<?php

declare(strict_types=1);

namespace SineosOrderProductNumber;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;


/**
 * SineosOrderProductNumber Plugin
 *
 * @category  Class
 * @package   SineosOrderProductNumber
 * @author    Sineos - software@sineos.ch
 * @copyright 2023 Sineos AG
 * @license   MIT License
 */
class SineosOrderProductNumber extends Plugin
{
    /**
     * @param InstallContext|UpdateContext $installOrUpdateContext
     */
    public function installOrUpdate($installOrUpdateContext): void
    {
        $systemConfigService = $this->container->get(SystemConfigService::class);
        $this->addCustomCss($systemConfigService);
    }

    /**
     * Adds custom CSS to the system configuration if it is not already set.
     *
     * @param SystemConfigService $systemConfigService The system configuration service.
     * @return void
     */
    private function addCustomCss(SystemConfigService $systemConfigService): void
    {
        if ($systemConfigService->get('SineosOrderProductNumber.config.customCss')) {
            return;
        }

        $customCss = <<<EOT
            .sw-select-result-list__content {
                width: 50vw;
                max-height: 450px;
            }
        EOT;

        $systemConfigService->set('SineosOrderProductNumber.config.customCss', $customCss);
    }
}
